SELECT * FROM doctor.medicine;
use doctor;
-- Acetaminophen
INSERT INTO medicine (name, description, administration, dosage, `side-effects`, contraindications)
VALUES ('Acetaminophen', 'Pain reliever and fever reducer', 'Oral', '325mg - 650mg every 4-6 hours', 'Nausea, stomach pain, liver damage (in high doses)', 'Liver disease');

-- Ibuprofen
INSERT INTO medicine (name, description, administration, dosage, `side-effects`, contraindications)
VALUES ('Ibuprofen', 'Pain reliever and fever reducer', 'Oral', '200mg - 400mg every 4-6 hours', 'Nausea, stomach pain, heartburn', 'Aspirin allergy, stomach ulcers');

-- Naproxen
INSERT INTO medicine (name, description, administration, dosage, `side-effects`, contraindications)
VALUES ('Naproxen', 'Pain reliever and anti-inflammatory', 'Oral', '220mg - 440mg every 12 hours', 'Nausea, stomach pain, heartburn', 'Aspirin allergy, stomach ulcers');

-- Aspirin
INSERT INTO medicine (name, description, administration, dosage, `side-effects`, contraindications)
VALUES ('Aspirin', 'Pain reliever and anti-inflammatory', 'Oral', '325mg - 650mg every 4-6 hours', 'Nausea, stomach pain, heartburn, bleeding', 'Bleeding disorders, children with flu-like symptoms');

-- Morphine
INSERT INTO medicine (name, description, administration, dosage, `side-effects`, contraindications)
VALUES ('Morphine', 'Pain reliever', 'Oral, intravenous, intramuscular', '10mg - 20mg every 4 hours', 'Nausea, constipation, drowsiness, confusion', 'Asthma, breathing problems, liver or kidney disease');

-- Oxycodone
INSERT INTO medicine (name, description, administration, dosage, `side-effects`, contraindications)
VALUES ('Oxycodone', 'Pain reliever', 'Oral', '5mg - 15mg every 4-6 hours', 'Nausea, constipation, drowsiness, confusion', 'Asthma, breathing problems, liver or kidney disease');

-- Fentanyl
INSERT INTO medicine (name, description, administration, dosage, `side-effects`, contraindications)
VALUES ('Fentanyl', 'Powerful pain reliever', 'Intravenous, transdermal', '0.05mg - 0.1mg every 1-2 hours', 'Nausea, constipation, drowsiness, confusion', 'Asthma, breathing problems, liver or kidney disease');

-- Heparin
INSERT INTO medicine (name, description, administration, dosage, `side-effects`, contraindications)
VALUES ('Heparin', 'Blood thinner', 'Intravenous, subcutaneous', '5000 units every 8-12 hours', 'Bleeding, bruising, allergic reaction', 'Bleeding disorders');

-- Warfarin
INSERT INTO medicine (name, description, administration, dosage, `side-effects`, contraindications)
VALUES ('Warfarin', 'Blood thinner', 'Oral', '2.5mg - 10mg once daily', 'Bleeding, bruising, skin necrosis', 'Pregnancy, bleeding disorders');

-- Clopidogrel
INSERT INTO medicine (name, description, administration, dosage, `side-effects`, contraindications)
VALUES ('Clopidogrel', 'Blood thinner', 'Oral', '75mg once daily', 'Bleeding, bruising, allergic reaction', 'Active bleeding, liver disease');

-- Metoprolol
INSERT INTO medicine (name, description, administration, dosage, `side-effects`, contraindications)
VALUES ('Metoprolol', 'Beta blocker', 'Oral', '25mg - 200mg once daily', 'Fatigue, dizziness, nausea', 'Asthma, heart block, low blood pressure');

-- Amlodipine
INSERT INTO medicine (name, description, administration, dosage, `side-effects`, contraindications)
VALUES ('Amlodipine', 'Calcium channel blocker', 'Oral', '5mg - 10mg once daily', 'Swelling, headache, dizziness', 'Heart failure, liver disease');

-- Lisinopril
INSERT INTO medicine (name, description, administration, dosage, `side-effects`, contraindications)
VALUES ('Lisinopril', 'ACE inhibitor', 'Oral', '2.5mg - 40mg once daily', 'Cough, dizziness, low blood pressure', 'Pregnancy, history of angioedema');

-- Atorvastatin
INSERT INTO medicine (name, description, administration, dosage, `side-effects`, contraindications)
VALUES ('Atorvastatin', 'Cholesterol-lowering medication', 'Oral', '10mg - 80mg once daily', 'Muscle pain, liver damage', 'Pregnancy, liver disease');

-- Metformin
INSERT INTO medicine (name, description, administration, dosage, `side-effects`, contraindications)
VALUES ('Metformin', 'Anti-diabetic medication', 'Oral', '500mg - 2000mg once or twice daily', 'Nausea, diarrhea, abdominal pain', 'Kidney disease, liver disease');

-- Insulin
INSERT INTO medicine (name, description, administration, dosage, `side-effects`, contraindications)
VALUES ('Insulin', 'Diabetes medication', 'Subcutaneous', 'Varies based on insulin type and individual needs', 'Hypoglycemia, weight gain', 'Hypoglycemia unawareness');

-- Levothyroxine
INSERT INTO medicine (name, description, administration, dosage, `side-effects`, contraindications)
VALUES ('Levothyroxine', 'Thyroid hormone replacement', 'Oral', '25mcg - 300mcg once daily', 'Weight loss, sweating, nervousness', 'Acute myocardial infarction, untreated adrenal insufficiency');

-- Omeprazole
INSERT INTO medicine (name, description, administration, dosage, `side-effects`, contraindications)
VALUES ('Omeprazole', 'Proton pump inhibitor', 'Oral', '20mg - 40mg once daily', 'Headache, nausea, diarrhea', 'Liver disease, low magnesium levels');

-- Pantoprazole
INSERT INTO medicine (name, description, administration, dosage, `side-effects`, contraindications)
VALUES ('Pantoprazole', 'Proton pump inhibitor', 'Oral', '20mg - 40mg once daily', 'Headache, nausea, diarrhea', 'Liver disease, low magnesium levels');

