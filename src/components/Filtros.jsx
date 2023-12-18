import { Container, Card, Button, CardFooter, Modal, Form } from "react-bootstrap"
import { useEffect, useState } from "react"
import { useFavs } from "../context/useFavs";

const Filtros =() => {
    const {AddtoFavs} = useFavs()
    const [data,setData] = useState([])
    const [show, setShow] = useState(false);
    const [categoria, setCategoria] = useState('Ordinary_Drink')
    const [dataModal, setdataModal] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        const DataFetch = async() => {
            try {
                const response = await fetch(`https://thecocktaildb.com/api/json/v1/1/filter.php?c=${categoria}`)
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
    },[categoria])
    const ControladorCambios = (e) => {
        const dato = e.target.value
        setCategoria(dato)
    }
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
        <Form.Select aria-label="Default select example" onChange={ControladorCambios}>
            <option value='Ordinary_Drink'>Ordinary Drink</option>
            <option value="Cocktail">Cocktail</option>
            <option value='Shake'>Shake</option>
            <option value="Other \/ Unknown">Other / Unknown</option>
            <option value="Cocoa">Cocoa</option>
            <option value="Shot">Shot</option>
            <option value="Coffee \/ Tea">Coffee / Tea</option>
            <option value="Homemade Liqueur">Homemade Liqueur</option>
            <option value="Punch \/ Party Drink">Punch / Party Drink</option>
            <option value="Beer">Beer</option>
            <option value="Soft_Drink">Soft Drink</option>
        </Form.Select>
        {data.map((post,i) => (
                <Card key={i} style={{ width: '25rem' }} className="mb-2 border-dark text-primary" border="secondary">
                <Card.Img src={post.strDrinkThumb} alt="Card image" />
                <Card.Body>
                    <Card.Title>{post.strDrink}</Card.Title>
                    <Card.Text>{!post.strTags == null || 'no tiene etiquetas'}</Card.Text>
                </Card.Body>
                <CardFooter>
                        <Button variant="primary" onClick={(e) => {eventoClick(e)}} data-id={post.idDrink}>
                            Ver mas
                        </Button>
                        <Button variant="secondary" onClick={(e) => {AñadirFav(e)}} data-id={post.idDrink}>
                            guardar!
                        </Button>
                    </CardFooter>
              </Card>
            ))}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{dataModal.strDrink}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <p>ID: {dataModal.idDrink}</p>
                        <p>No se tiene mas datos!</p>
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

export default Filtros