import { Container } from 'reactstrap';
const JsonList = (ListDetails) => {
    console.log(ListDetails.imgDetail, "image Details");
    return (
        <>
            <div>{ListDetails.imgDetail.map((dish, key) => {
                return (
                    <div>
                        <Container>
                            <div key={key} className="dishesRow shadow-lg p-3 mb-5 bg-light rounded" >
                                <p>{dish.author}</p>
                            </div>
                        </Container>
                    </div>
                );
            })}
            </div>
        </>
    );
}

export default JsonList;
