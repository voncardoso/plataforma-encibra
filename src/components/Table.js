import { Container } from "./Table_style";

export function Table({d1, d2, d3, d4, d5, d6, t1, t2, t3, t4, t5, t6}){
    return(
        <Container>
            <thead>
                <tr>
                    <th>{d1}</th>
                    <th>{d2}</th>
                    <th>{d3}</th>
                    <th>{d4}</th>
                    <th>{d5}</th>
                    <th>{d6}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{t1}</td>
                    <td>{t2}</td>
                    <td>{t3}</td>
                    <td>{t4}</td>
                    <td>{t5}</td>
                    <td>{t6}</td>
                    <td><button>teste</button></td>
                </tr>
                <tr>
                    <td>{t1}</td>
                    <td>{t2}</td>
                    <td>{t3}</td>
                    <td>{t4}</td>
                    <td>{t5}</td>
                    <td>{t6}</td>
                    <td><button>teste</button></td>
                </tr>
            </tbody>
            
        </Container>
    )
}