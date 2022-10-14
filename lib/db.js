import mysql from 'mysql'
import mysqlAwait from 'mysql-await'

let get_host = () => {
    console.log(process.env.DEMO_DB)
    if (process.env.NODE_ENV == 'production') {
        console.log(process.env.DEMO_DB)
        return process.env.DEMO_DB
    } else {
        console.log(process.env.NODE_ENV)
        return 'blog.sumu.today'
    }
}

let db_host = get_host();
let user = "root"
let database_name = "demo"
let password = "123456"


export function create() {
    var connection = mysql.createConnection({
        host: get_host(),
        user: user,
        password: password,
        database: database_name
    });
    return connection;
}


export function createAwait() {
    var connection = mysqlAwait.createConnection({
        host: db_host,
        user: user,
        password: password,
        database: database_name
    });
    return connection;
}

export const mydb = create()
export const mydbAwait = createAwait()