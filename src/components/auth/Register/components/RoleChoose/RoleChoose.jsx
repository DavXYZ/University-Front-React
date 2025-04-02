import { NavLink } from 'react-router-dom';
import Footer from '../../../../common/Footer';
import Header from '../../../../common/Header';
import NavBar from '../../../../common/NavBar';
import styles from './RoleChoose.module.css';

const RoleChoose = ({roles, selectedRole, handleRoleSelect, handleCreateAccount}) => {
    return (
        <div>
            <Header />
            <NavBar />
            <div className={styles.container}>
                <div className={styles.left}>
                    <h2>Բարի գալուստ գիտական համայնք</h2>
                    <p>Ընտրեք ձեր դերը և դարձեք մասնակից գիտական հոդվածների հրապարակման գործընթացին</p>
                    <div className={styles.roles}>
                        {roles.map((role) => (
                            <button
                                key={role.id}
                                className={`${styles.roleButton} ${selectedRole === role.id ? styles.selected : ''}`}
                                onClick={() => handleRoleSelect(role.id)}
                            >
                                <img src={role.icon} alt={role.name} />
                                {role.name}
                            </button>
                        ))}
                    </div>
                    <button 
                        className={styles.createAccountBtn} 
                        onClick={handleCreateAccount}
                        disabled={!selectedRole}
                    >
                            Ստեղծել հաշիվ
                    </button>
                </div>
                <div className={styles.right}>
                    <h2>Հաշիվ ստեղծելու առավելություններ</h2>
                    <ul type="none">
                        <li>Փաստաթղթերի փոխանակում և թարմացում</li>
                        <li>Արագ մուտք ձեր ներկայացված նյութերին՝ դիտելու խմվագրելու համար</li>
                        <li>Մուտք մեր էլեկտրոնային գրադարանին՝հարյուր հազարավոր Փաստաթղթերով</li>
                        <li>Ձեր վարկանիշի դիտարկում ներբեռնումների հիման վրա</li>
                        <li>Բաժանորդագրություն հարյուրավոր էլեկտրոնային ամսագրերին</li>
                        <li>Հաշվի կառավարում ցանկացած վայրից</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default RoleChoose;