"use server"

const googleScriptURL = "https://script.google.com/macros/s/AKfycbx4eHI6asUx2_OI0b7hxLUiODxAwhEjOKqNg-JQx3LjAwy3OVW173w6yfCvEaz0lj1K/exec"


export const postDetails = async(formData) => {
    const name = formData.get("name");
    const phone = formData.get("phone");
    const district = formData.get("district");
    const thana = formData.get("thana");
    const address = formData.get("address");
    try {
        const res = await fetch (googleScriptURL, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name,
                phone, 
                district, 
                thana, 
                address
            })
        })
        if (!res.ok) {
            throw new Error("Failed")
        }
        return {successMessage: `sdlkfjsdlfsdlj`}
    }
    catch (error) {
        return {errorMessage: `error`}
    }
}