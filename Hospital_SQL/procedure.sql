use regevent_logister;
SELECT * FROM register.register;

DELIMITER $$
CREATE PROCEDURE `AutoChangeStatus`()
BEGIN
	#Routine body goes here...
	#Status(1:Waiting,2:Processing,3:FInished)
	update register set status = "Waiting" where STR_TO_DATE(SUBSTRING_INDEX(time, ' - ', 1), '%Y-%m-%d %H:%i') > NOW();
	
    update register set status = "Processing" 
    where STR_TO_DATE(SUBSTRING_INDEX(time, ' - ', 1), '%Y-%m-%d %H:%i') <= NOW() 
    AND STR_TO_DATE(CONCAT(SUBSTRING_INDEX(SUBSTRING_INDEX(time, ' - ', 1), ' ', 1), ' ', SUBSTRING_INDEX(time, ' - ', -1)), '%Y-%m-%d %H:%i') >= NOW();
	
    update register set status = "Finished" and finishTime = STR_TO_DATE(Now(), '%Y-%m-%d') where 
    STR_TO_DATE(CONCAT(SUBSTRING_INDEX(SUBSTRING_INDEX(time, ' - ', 1), ' ', 1), ' ', SUBSTRING_INDEX(time, ' - ', -1)), '%Y-%m-%d %H:%i') < NOW();
END$$
DELIMITER ;

select @@event_scheduler;
SHOW EVENTS;

-- 创建一个日志表
CREATE TABLE event_log (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_name VARCHAR(255),
    executed_at DATETIME
);

-- 创建事件，每一分钟调用一次存储过程监听预约状态
CREATE EVENT IF NOT EXISTS event_listenToChangeStatus 
ON SCHEDULE EVERY 30 SECOND 
STARTS Now() 
ON COMPLETION PRESERVE 
DO 	
	CALL AutoChangeStatus();
	INSERT INTO event_log (event_name, executed_at)
	VALUES ('event_listenToChangeStatus', NOW());

--
DROP PROCEDURE AutoChangeStatus;
DROP EVENT event_listenToChangeStatus;

-- 拼接时间段获取预约的开始和结束时间
SELECT
    SUBSTRING_INDEX(time, ' - ', 1) AS start_time,
    CONCAT(SUBSTRING_INDEX(SUBSTRING_INDEX(time, ' - ', 1), ' ', 1), ' ', SUBSTRING_INDEX(time, ' - ', -1)) AS end_time
FROM register;

-- 获取所有在当前时间之后的记录
SELECT
    SUBSTRING_INDEX(time, ' - ', 1) AS start_time,
    CONCAT(SUBSTRING_INDEX(SUBSTRING_INDEX(time, ' - ', 1), ' ', 1), ' ', SUBSTRING_INDEX(time, ' - ', -1)) AS end_time
FROM register
WHERE STR_TO_DATE(SUBSTRING_INDEX(time, ' - ', 1), '%Y-%m-%d %H:%i') > NOW();

-- Test
-- Waiting
SELECT * FROM register where STR_TO_DATE(SUBSTRING_INDEX(time, ' - ', 1), '%Y-%m-%d %H:%i') > NOW();
-- Finished
SELECT * FROM register where STR_TO_DATE(CONCAT(SUBSTRING_INDEX(SUBSTRING_INDEX(time, ' - ', 1), ' ', 1), ' ', SUBSTRING_INDEX(time, ' - ', -1)), '%Y-%m-%d %H:%i') < NOW();
-- Processing
SELECT * FROM register where STR_TO_DATE(SUBSTRING_INDEX(time, ' - ', 1), '%Y-%m-%d %H:%i') <= NOW() 
    AND STR_TO_DATE(CONCAT(SUBSTRING_INDEX(SUBSTRING_INDEX(time, ' - ', 1), ' ', 1), ' ', SUBSTRING_INDEX(time, ' - ', -1)), '%Y-%m-%d %H:%i') >= NOW();
