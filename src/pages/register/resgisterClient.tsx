import React from 'react'
import rocket from '../../assets/rocket.svg'
import styles from './styles.module.scss'

function ResgisterClient() {
  return (
    <div className="App">
      <body>
        <div className={styles.main}>
          <div className={styles.left}>
            <div className={styles.text}>
              <p>Cadastre seus clientes</p>
            </div>
            <div className={styles.image}>
              <img src={rocket}/>
            </div>
          </div>
          <div className={styles.right}>
              <form>
                <div className={styles.form}>
                  <div className={styles.inputs}>
                    <input className={styles.all} name="name" placeholder="Nome Fantasia" required/>
                  </div>
                  <div className={styles.inputs}>
                    <input className={styles.meio} name="companyName" placeholder="Razão Social" required/>
                    <input className={styles.meio} name="cnpj"  placeholder="CNPJ" required/>
                  </div>
                  <div className={styles.inputs}>
                    <input className={styles.all} name="email" placeholder="Email" required/>
                  </div>
                  <div>
                    <div className={styles.inputs}>
                      <input className={styles.all} name="address" placeholder="Rua" required/>
                    </div>
                    <div className={styles.inputs}>
                      <input className={styles.meio} name="number" placeholder="Número" required/>
                      <input className={styles.meio} name="district"  placeholder="Bairro" required/>
                    </div>
                    <div className={styles.inputs}>
                      <input className={styles.meio} name="complement" placeholder="Complemento" required/>
                      <input className={styles.meio} name="zipCode"  placeholder="CEP" required/>
                    </div>
                  </div>
                </div>
                <div className={styles.submit}>
                  <input type="submit" value="Cadastrar" />
                </div>
              </form>
          </div>
        </div>
      </body>
    </div>
  )
}

export default ResgisterClient
