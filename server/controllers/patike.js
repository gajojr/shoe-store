export const getPatike = (req, res) => {
    res.send('patike ruta');
}

export const getPatiku = (req, res) => {
    const idPatike = req.params.id;
    res.send(idPatike);
}