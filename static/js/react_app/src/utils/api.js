const apiUrl = 'http://localhost:5000';

export const generateKerasCode = async (architecture) => {
  try {
    const response = await fetch(`${apiUrl}/generate_keras_code`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(architecture),
    });
    const data = await response.json();
    return data.keras_code;
  } catch (error) {
    console.error('Error generating Keras code:', error);
    return null;
  }
};