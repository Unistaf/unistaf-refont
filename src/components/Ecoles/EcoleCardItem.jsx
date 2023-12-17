/* eslint-disable max-len */
import Button from "components/Button"
import React from "react"

const EcoleCardItem = () => {
    return (
        <div className="flex flex-col gap-5 items-start bg-white rounded-lg shadow-lg md:flex-row hover:bg-gray-100 p-5">
            <img
                className="object-cover w-full rounded-t-lg h-50 md:w-40 md:rounded-none md:rounded-s-lg"
                src="data:image/jpeg;base64,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"
                alt=""
            />
            <div className="flex flex-col flex-1 justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Unistaf School</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Année d’habilitation : 2012</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Localisation: HLM Grand yoff</p>
                <Button title={"Voir plus"} className="bg-transparent border rounded-full w-40 h-5 border-blue text-blue py-2" />
            </div>
        </div>
    )
}

export default EcoleCardItem