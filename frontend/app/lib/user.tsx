export async function getAdmins(token: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/admins`, {
      method: "GET",
      headers: { 
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    });

    const data = await res.json();

    if (!res.ok) {
      return { 
        success: false, 
        message: data.detail || "Failed to fetch admin list" 
      };
    }

    return { success: true, data };
  } 
  catch (err) {
    return { success: false, message: "Network error occurred while fetching admins" };
  }
}

export async function updateAdminRole(token: string, identifier: string | number, newRoleId: number) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/admins/update-role`, {
      method: "PATCH",
      headers: { 
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({ 
        identifier: identifier,            
        new_role_id: newRoleId 
      }),
    });

    const data = await res.json();
    return res.ok ? { success: true, data } : { success: false, message: data.detail };
  } catch (err) {
    return { success: false, message: "Network error" };
  }
}

export async function fetchUsers(token: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
      method: "GET",
      headers: { 
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    });

    const data = await res.json();
    return res.ok ? { success: true, data } : { success: false, message: data.detail };
  } catch (err) {
    return { success: false, message: "Network error" };
  }
}