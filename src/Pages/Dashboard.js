import { Sidbar } from "../components/Sidbar";
import { Container } from "./Dashboard_style";

export function Dashboard (){
    return(
        <Container>
            <Sidbar />
            <div>
                <h1>Dashboard</h1>
            </div>
        </Container>
    )
}