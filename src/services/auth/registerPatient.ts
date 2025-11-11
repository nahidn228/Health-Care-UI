/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const registerPatient = async (
  _currentState: any,
  formData: any
): Promise<any> => {
  try {
    const registerData = {
      password: formData.get("password"),
      patient: {
        name: formData.get("name"),
        address: formData.get("address"),
        email: formData.get("email"),
      },
    };

    const newFormData = new FormData();
    newFormData.append("data", JSON.stringify(registerData));

    const entries = Object.fromEntries(formData.entries());
    console.log(entries);

    const res = await fetch(
      "http://localhost:5000/api/v1/user/create-patient",
      {
        method: "POST",
        body: newFormData,
      }
    ).then((res) => res.json());

    console.log("response data", res);
    return res;
  } catch (error) {
    console.error(error);
    return { error: "Registration failed" };
  }
};
