import { mydbAwait } from "../../lib/db"

export default async function handler(req, res) {
    let cmd = "select id, name from d_user"
    let resultes = await mydbAwait.awaitQuery(cmd)
    let data = await resultes.map(res => {
        return {
            'id': res.id,
            'name': res.name
        }
    })
    console.log(data)
    return res.json(data);
}
