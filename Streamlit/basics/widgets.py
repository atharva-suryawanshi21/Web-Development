import streamlit as st

st.title("Time to learn streamlit")

st.header("1. Buttons")
button1 = st.button("click button")
if button1:
    st.write("you are a human")

st.header("2. Checkbox")
likes = st.checkbox("Do you like Genshin Impact?")

if likes:
    st.write("yes!!, Me too")

    st.header("3. Radio Button")
    element = st.radio("What is your favorite element?", ("electro", "geo","dendro","cryo"))

    if st.button("submit element"):
        if element == "electro":
            st.write("Me too")
        else:
            st.write("Good, but I like Electro")

    st.header("4. Select box")
    region = st.selectbox("What is your favorite region?", ("fontaine", "sumeru","Inazuma","liyue","monstat"))

    if st.button("submit region"):
        if region == "sumeru":
            st.write("Me too")
        else:
            st.write("Good, but I like sumeru")

    st.header("5. multi select")
    character = st.multiselect("Which character do you like?", ["Raiden Shogun","Aether", "Lumine","Kamisato Ayaka"])

    if st.button("submit character"):
        if "Raiden Shogun" in character:
            st.write("I like Raiden Shogun too")
        else:
            st.write("Good, but I like Raiden Shogun")

    st.header("6. Slider")
    version = st.slider("Since which patch are you playing the game?", 0.0, 4.4, 0.1,0.1)
    
    st.header("7. Text Input")
    user_text = st.text_input("Describe your favorite Genshin Character.")
    if st.button("submit text"):
        st.write("Rodger that!!!!!!!!")

    st.header("8. number input")
    age = st.number_input("What's your age?")
    if st.button("submit age"):
        st.write(f"Oh!! so your age is {age}, Good")

    st.header("9. text area")
    feedback = st.text_area("It's been a wonderful conversation, please leave a feedback here",'''Leave a good feedback UwU''')
    if st.button("submit feedback"):
        st.write("Siyonara!!!")

