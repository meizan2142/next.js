"use server"

const googleScriptURL = "https://script.google.com/macros/s/AKfycbwzjEs7T3TM2qnWLmenfc0JX4TYtXrGZnhoTX9pXaZeyWAf8rmKXDfhFQwrKOTXhBjL/exec"

export const postDetails = async (formData) => {
    try {
        // Create URLSearchParams instead of JSON
        const params = new URLSearchParams();
        params.append('name', formData.get("name"));
        params.append('phone', formData.get("phone"));
        params.append('district', formData.get("district"));
        params.append('thana', formData.get("thana"));
        params.append('address', formData.get("address"));

        const res = await fetch(googleScriptURL, {
            method: "POST",
            body: params
            // No Content-Type header needed for URLSearchParams
        })

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        return {
            success: data.result === "success",
            message: data.message || "Submission successful"
        }
    }
    catch (error) {
        console.error("Error in postDetails:", error);
        return {
            success: false,
            message: error.message || "Submission failed"
        }
    }
}