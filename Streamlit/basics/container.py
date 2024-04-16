import streamlit as st

st.title("Container")

st.write("Introduction to electro")
main_container = st.container()
col1, col2 = main_container.columns(2)
col1.image("images.jpeg")
expander2 = col2.expander("Information on the image")
with expander2:
    st.write("Electro on its own does not have any special effect, but it will allow Electro Elemental Reactions to occur. Certain mechanics in Inazuma, such as the Lightning Strike Probe, will respond to characters or monsters affected by Electro. Any source of Electro DMG, including Electro Crystals, will apply the Electro status. Getting struck by lightning or entering a body of water struck by lightning during a thunderstorm will also apply Electro.")