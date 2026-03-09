import { IRegisterInputDto } from "@repo/schemas/auth/auth";

export async function register({ email, password, name, lastName  }: IRegisterInputDto) { 

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password,
        name,
        lastName
      })
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to register");
    }

    return res.json();
}