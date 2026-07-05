import { Onboarding } from './components/Onboarding'
import { Dashboard } from './components/Dashboard'
import { useQuitProfile } from './useQuitProfile'

function App() {
  const { profile, setProfile } = useQuitProfile()

  if (!profile) {
    return <Onboarding onSubmit={setProfile} />
  }

  return (
    <Dashboard
      profile={profile}
      onReset={() => {
        if (
          confirm(
            'Quer ajustar seus dados? Seu progresso continua contando a partir da data que você definir.',
          )
        ) {
          setProfile(null)
        }
      }}
    />
  )
}

export default App
