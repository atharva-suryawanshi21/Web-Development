import streamlit as st
import spacy

# cache the model
@st.cache_resource
def load_model(model_name):
    return spacy.load(model_name)
nlp = load_model("en_core_web_lg")


def extract_entities(ent_types, text):
    results = []
    doc = nlp(text)
    for ent in doc.ents:
        if ent.label_ in ent_types:
            results.append((ent.text, ent.label))
    return results

st.title("Forms in Streamlit")

# form
form1 = st.sidebar.form(key = 'Options')
form1.header("Input Bar")
ent_types = form1.multiselect("Select the entities you want to extract",["PERSON", "ORG","GPE"])
form1.form_submit_button("Submit")


input_text = st.text_area("Sample Text", "James enjoys playing basketball in Florida for th Salvation Army")
hits = extract_entities(ent_types, input_text)
st.write(hits)