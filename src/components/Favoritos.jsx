/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Container, Card, CardFooter, Button, Modal } from "react-bootstrap"
import { detectorIBA, detectorIng, detectorInst } from "./popDatos"
import { useState, useEffect } from "react"
import { useFavs } from "../context/useFavs"

function Favoritos() {
    const {fav, DeletToFavs} = useFavs()
    const data = fav
    const [show, setShow] = useState(false);
    const [dataModal, setdataModal] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const eventoClick = (e) => {
        handleShow()
        const destino = e.target.dataset.id
        const datoObj = data.filter((post) => {
            const idObj = post.idDrink
            return idObj.includes(destino)
        })
        setdataModal(datoObj[0])
    }
    const eventoEliminar = (e) => {
        const destino = e.target.dataset.id
        const datoObj = data.filter((post) => {
            const idObj = post.idDrink
            return idObj.includes(destino)
        })
        DeletToFavs(datoObj[0])
    }

    return(
        <Container fluid className="row justify-content-space-around" style={{paddingTop: '5rem'}}>
            {data != 0 ? data.map((post) => (
                <Card key={post.idDrink} style={{ width: '25rem' }} className="mb-2 border-dark text-primary" border="secondary">
                <Card.Img src={post.strDrinkThumb} alt="Card image" />
                <Card.Body>
                    <Card.Title>{post.strDrink}</Card.Title>
                    <Card.Text>{`Categoria: ${post.strCategory}`}</Card.Text>
                    <Card.Text>{!post.strTags == null || 'no tiene etiquetas'}</Card.Text>
                </Card.Body>
                <CardFooter>
                        <Button variant="primary" onClick={(e) => {eventoClick(e)}} data-id={post.idDrink}>
                            Ver mas
                        </Button>
                        <Button variant="secondary" onClick={(e) => {eventoEliminar(e)}} data-id={post.idDrink}>eliminar!</Button>
                    </CardFooter>
              </Card>
            )) : <h1>No tienes guardados!</h1>}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{dataModal.strDrink}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <p>ID: {dataModal.idDrink} - {dataModal.strAlcoholic}</p>
                        <p>{detectorIBA(dataModal)}</p>
                        <p>{detectorIng(dataModal)}</p>
                        <p>{detectorInst(dataModal)}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default Favoritos