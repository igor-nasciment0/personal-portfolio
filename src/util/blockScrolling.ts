export function blockPageScrolling(blocked: boolean) {
    const root = document.getElementById("body")!;
    if (blocked) {
        root.style.height = "100vh"
        root.style.overflow = "hidden"
    } else {
        root.style.height = "unset"
        root.style.overflow = "unset"
    }
}