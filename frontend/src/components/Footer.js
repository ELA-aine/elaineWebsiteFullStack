function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer>
            <p>✦ PIXEL PORTAL ✦</p>
            <p>Crafted with 💜 & pixels by Elaine</p>
            <p>© {currentYear} | All Rights Reserved</p>
        </footer>
    );
}

export default Footer;

