export async function getUser() {
  if (typeof window === "undefined") return null;
  const token = localStorage.getItem("token");
  if (!token) return null;
  try {
    // You could decode or validate the token here
    return { id: 1, name: "Gokul" };
  } catch {
    return null;
  }
}