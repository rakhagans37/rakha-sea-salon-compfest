export const Logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";

    return null;
}