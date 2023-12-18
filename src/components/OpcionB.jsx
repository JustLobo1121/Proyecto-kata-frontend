import { Container, Card, Button, CardFooter, Modal } from "react-bootstrap"
import { detectorIBA, detectorIng, detectorInst } from "./popDatos";
import { useEffect, useState } from "react"
import { useFavs } from "../context/useFavs";

function OpcionB() {
    const {AddtoFavs} = useFavs()
    const [data,setData] = useState([])
    const [show, setShow] = useState(false);
    const [dataModal, setdataModal] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const DataFetch = async() => {
            try {
                const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b')
                if(!response == "ok") {
                    throw new Error('Error no se conecto con la Api!')
                }
                const jsonData = await response.json()
                setData(jsonData.drinks)
            } catch (error) {
                console.error(error)
            }
        }
        DataFetch()
    },[])
    const eventoClick = (e) => {
        handleShow()
        const destino = e.target.dataset.id
        const datoObj = data.filter((post) => {
            const idObj = post.idDrink
            return idObj.includes(destino)
        })
        setdataModal(datoObj[0])
    }
    const AñadirFav = (e) => {
        const destino = e.target.dataset.id
        const datoObj = data.filter((post) => {
            const idObj = post.idDrink
            return idObj.includes(destino)
        })
        AddtoFavs(datoObj[0])
    }
    return (
        <Container fluid className="row justify-content-space-around" style={{paddingTop: '5rem'}}>
            <h1>Bebidas</h1>
            {data.map((post,i) => (
                <Card key={i} style={{ width: '25rem' }} className="mb-2 border-dark text-primary" border="secondary">
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
                        <Button variant="secondary" onClick={(e) => {AñadirFav(e)}} data-id={post.idDrink}>guardar!</Button>
                    </CardFooter>
              </Card>
            ))}
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

export default OpcionB