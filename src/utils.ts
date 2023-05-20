type Theme = "light" | "dark";

export const theme = {
    values() {
        return { dark: "dark", light: "light" };
    },
    get(): Theme | null {
        const theme = localStorage.getItem("app-theme");
        const themes = this.values();
        if (theme === themes.dark) return "dark";
        else if (theme === themes.light) return "light";
        return null;
    },
    apply(theme: Theme) {
        console.log("@apply theme ", theme);

        const doc = document.getElementById("app-body");
        if (!doc) return;

        if (theme === "light") {
            doc.classList.remove("dark");
            doc.classList.add(theme);
        } else if (theme === "dark") {
            doc.classList.remove("light");
            doc.classList.add(theme);
        }
        localStorage.setItem("app-theme", theme);
    },
    toggle() {
        this.apply(this.isDark() ? "light" : "dark");
    },
    initiate() {
        const theme = this.get();
        console.log("init () => ", theme);

        if (theme) this.apply(theme);
    },
    isDark() {
        return this.get() === this.values().dark;
    },
};
