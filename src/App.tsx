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
        if (confirm('Tem certeza que quer editar seus dados?')) {
          setProfile(null)
        }
      }}
    />
  )
}

export default App
