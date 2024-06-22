import { ACCEUIL_PATH, MES_CANDIDATURES_PATH } from "./navigationPaths";
import { HiHome } from "react-icons/hi";

/*
|--------------------------------------------------------------------------
! Sidebar Items
|--------------------------------------------------------------------------
|
| Ici se trouve tous les liens et icons qui doivent etre sur le sidebar
| de SplitShell
*/
export const links = [
    { path: ACCEUIL_PATH, icon: HiHome, label: "Mon profil" },
    { path: MES_CANDIDATURES_PATH, icon: HiHome, label: "Mes candidatures" },
]
