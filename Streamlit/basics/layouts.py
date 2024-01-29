import streamlit as st

def upper_case(text):
    return text.upper()
    

st.title("Layouts and Images")

# Sidebar
st.sidebar.image('images.jpeg', width=100)
st.sidebar.header("Features")
input_text = st.sidebar.text_area("Enter your text here: ")
if st.sidebar.button("Submit"):
    col1, col2 = st.columns(2)
    expander1 = col1.expander("Input Data") 
    with expander1:
        st.write(input_text)

    expander2 = col2.expander("Upper case text")
    with expander2:
        st.write(upper_case(input_text))


