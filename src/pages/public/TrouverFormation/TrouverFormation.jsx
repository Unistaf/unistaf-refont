import AppMaxWidth from "components/AppMaxWidth/AppMaxWidth"
import FiliereListChoix from "components/TrouverMaFormation/FiliereListChoix"
import DomaineListChoix from "components/TrouverMaFormation/DomaineListChoix"
import DiplomeListChoix from "components/TrouverMaFormation/DiplomeListChoix"
import LieuEtudeListChoix from "components/TrouverMaFormation/LieuEtudeListChoix"
import React from "react"
import TrouverMaFormationeContexteProvider from "context/TrouverMaFormationeContexteProvider"
// import ListeEcoles from "components/Ecoles/ListeEcoles"
import DiplomeList from "components/Diplomes/DiplomeList"

// const TrouverFormationContainer = ({ children }) => {
//     return <>{children}</>
// }

const TrouverFormation = () => {
    return (
        <AppMaxWidth>
            <TrouverMaFormationeContexteProvider>
                <DomaineListChoix />
                <FiliereListChoix />
                <DiplomeListChoix />
                <LieuEtudeListChoix />
                <DiplomeList isImage={true} className="flex-col" />
            </TrouverMaFormationeContexteProvider>
        </AppMaxWidth>
    )
}

export default TrouverFormation