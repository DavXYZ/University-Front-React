"use client"
import Footer from "../../../../common/Footer"
import Header from "../../../../common/Header"
import NavBar from "../../../../common/NavBar"
import styles from "./RoleChoose.module.css"
import { ArrowRight } from "lucide-react"

const RoleChoose = ({ roles, selectedRole, handleRoleSelect, handleCreateAccount }) => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <NavBar />
      <div className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftSection}>
            <div className={styles.headingSection}>
              <h2 className={styles.mainHeading}>Բարի գալուստ գիտական համայնք</h2>
              <p className={styles.subHeading}>
                Ընտրեք ձեր դերը և դարձեք մասնակից գիտական հոդվածների հրապարակման գործընթացին։
              </p>
            </div>

            <div className={styles.rolesContainer}>
              {roles.map((role) => (
                <button
                  key={role.id}
                  className={`${styles.roleCard} ${selectedRole === role.id ? styles.selected : ""}`}
                  onClick={() => handleRoleSelect(role.id)}
                >
                  <div className={styles.roleIconContainer}>
                    <img src={role.icon || "/placeholder.svg"} alt={role.name} className={styles.roleIcon} />
                  </div>
                  <span className={styles.roleName}>{role.name}</span>
                </button>
              ))}
            </div>

            <button className={styles.createAccountBtn} onClick={handleCreateAccount} disabled={!selectedRole}>
              <span>Ստեղծել հաշիվ</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className={styles.rightSection}>
            <h2 className={styles.benefitsHeading}>Հաշիվ ստեղծելու առավելությունները</h2>
            <ul className={styles.benefitsList}>
              <li className={styles.benefitItem}>✔ Փաստաթղթերի փոխանակում և թարմացում</li>
              <li className={styles.benefitItem}>✔ Արագ մուտք ձեր ներկայացված նյութերին՝ դիտելու, խմբագրելու համար</li>
              <li className={styles.benefitItem}>
                ✔ Մուտք մեր էլեկտրոնային գրադարանին՝ հարյուր հազարավոր փաստաթղթերով
              </li>
              <li className={styles.benefitItem}>✔ Ձեր վարկանիշի դիտարկում ներբեռնումների հիման վրա</li>
              <li className={styles.benefitItem}>✔ Բաժանորդագրություն հարյուրավոր էլեկտրոնային ամսագրերին</li>
              <li className={styles.benefitItem}>✔ Հաշվի կառավարում ցանկացած վայրից</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default RoleChoose
