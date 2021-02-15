export const getKorisnika = (req, res) => {
    const idKorisnika = req.params.id;
    res.send(`korisnik ruta: ${idKorisnika}`);
}

export const registrujKorisnika = (req, res) => {
    res.send('Ovo je ruta za registrovanje');
}