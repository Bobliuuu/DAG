from bifrost import npm, node

import streamlit as st

# Create a Streamlit app
st.title("Machine Learning App")

# Create dropdowns for model and dataset selection
selected_model = st.selectbox("Select ML Model", ["Model A", "Model B", "Model C", "Custom"])
selected_dataset = st.selectbox("Select Dataset", ["Dataset 1", "Dataset 2", "Dataset 3"])

# Simulate training (pretend to have epochs and accuracy metrics)
fake_epochs = 10
fake_accuracy = 0.85

# Display the results
st.write(f"Selected Model: {selected_model}")
st.write(f"Selected Dataset: {selected_dataset}")
st.write(f"Epochs: {fake_epochs}")
st.write(f"Accuracy: {fake_accuracy}")