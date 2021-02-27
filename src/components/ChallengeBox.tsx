import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo Desafio</strong>
                        <p>
                            {activeChallenge.description}
                        </p>
                    </main>
                    <footer>
                        <button
                            type='button'
                            className={styles.challengeSucceededButton}
                        >
                            Completei
                        </button>
                        <button
                            type='button'
                            className={styles.challengeFailedButton}
                            onClick={resetChallenge}
                        >
                            Falhei
                        </button>
                    </footer>
                </div>
            ):(
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio a ser completado</strong>
                    <p>
                        <img src='icons/level-up.svg' alt='Level up' />
                        Complete o desafio, ganhe experiência e avance de level.
                    </p>
                </div>
            )}
        </div>
    );
}