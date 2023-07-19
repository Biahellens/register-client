import React, { useState, useEffect, useMemo } from "react"
import styles from './styles.module.scss'
import Table from "./table"
import json from './APIClients.json';
import peoples from '../../assets/peoples.svg'

function TableClients() {
  const columns = useMemo(
    () => [
      {
        Header: "Person",
        columns: [
          {
            Header: "Nome Fantasia",
            accessor: "client.fantasyName",
          },
          {
            Header: "Razão Social",
            accessor: "client.corporateName",
          },
          {
            Header: "CNPJ",
            accessor: "client.cnpj",
          },
          {
            Header: "Email",
            accessor: "client.email",
          },
        ],
      },
      {
        Header: "Endereço",
        columns: [
          {
            Header: "Endereço",
            accessor: "client.address",
          },
          {
            Header: "Número",
            accessor: "client.number",
          },
          {
            Header: "Bairro",
            accessor: "client.district",
          },
          {
            Header: "Estado",
            accessor: "client.state",
          },
          {
            Header: "CEP",
            accessor: "client.zipCode",
          },
        ],
      },
    ],
    []
  )

  const arr: string[] = []
  const [data, setData] = useState(arr);

  useEffect(() => {
    (async () => {
      let t = []
      t = JSON.parse(JSON.stringify(json))
      console.log(JSON.parse(JSON.stringify(json)))
      setData(t);
    })();
  }, []);

  return (
    <div className="App">
      <body>
        <div className={styles.main}>
          <div className={styles.nav}>
            <div className={styles.image}>
              <p>Clientes Cadastrados</p>
              <img src={peoples}/>
            </div>
          </div>
          <div className={styles.table}>
            <div className={styles.content}>
              <Table columns={columns} data={data} />
            </div>
          </div>
        </div>
      </body>
    </div>
  )
}

export default TableClients
