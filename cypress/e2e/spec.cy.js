describe("Dashboard Comprehensive Testing", () => {
  const themes = [
    { colorClass: "bg-[#1E90FF]", rgb: "rgb(30, 144, 255)" }, // Blue
    { colorClass: "bg-[#DB7093]", rgb: "rgb(219, 112, 147)" }, // Pink
    { colorClass: "bg-[#6A5ACD]", rgb: "rgb(106, 90, 205)" },  // Purple
    { colorClass: "bg-[#8B4513]", rgb: "rgb(139, 69, 19)" },   // Brown
    { colorClass: "bg-[#299D91]", rgb: "rgb(41, 157, 145)" },  // Green (default)
  ];

  beforeEach(() => {
    cy.visit("http://localhost:5173/login");
    cy.get("input#email").type("hello@example.com");
    cy.get("input#password").type("123456");
    cy.get("button").contains("Login").click();
    cy.url().should("include", "/");
  });

  it("should retain username after refreshing the page", () => {
    // Pastikan username terlihat sebelum refresh
    cy.get("header").contains("John Doe").should("be.visible");

    // Tunggu sebentar sebelum refresh untuk melihat halaman
    cy.wait(2000); // Tambahan waktu 2 detik sebelum refresh

    // Refresh halaman
    cy.reload();

    // Tunggu loader selesai
    cy.get(".loader").should("be.visible"); // Pastikan loader terlihat
    cy.get(".loader").should("not.exist");  // Tunggu hingga loader hilang

    // Verifikasi username tetap terlihat setelah refresh
    cy.get("header").contains("John Doe").should("be.visible"); // Ganti "John Doe" sesuai dengan username
  });

  it("should allow user to change themes and verify effects", () => {
    themes.forEach((theme) => {
      // Klik tema berdasarkan kelas warna
      cy.get(`.${theme.colorClass.replace(/[\[\]#]/g, "\\$&")}`).click();

      // Tunggu 1 detik untuk melihat perubahan warna
      cy.wait(1500);
    });
  });
});
