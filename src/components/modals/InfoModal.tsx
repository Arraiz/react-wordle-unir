import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Como jugar" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
       Adivina la palabra en 6 intentos, cada intento te brindara información sobre que letras contienen la palabra en funcion a su color. No se admiten ni conjugaciones ni plurales
      <br>Mikel Diez (arraiz)</br>
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="W"
          status="correct"
        />
        <Cell value="L" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
        <Cell value="N" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
       La letra W es correcta y esta en su lugar.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="F" isCompleted={true} />
        <Cell value="I" isCompleted={true} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="B"
          status="present"
        />
        <Cell value="R" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
       La letra B es correcta pero no esta en su lugar.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="O" isCompleted={true} />
        <Cell value="N" isCompleted={true} />
        <Cell value="D" isCompleted={true} />
        <Cell isRevealing={true} isCompleted={true} value="A" status="absent" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
       La letra U no es correcta.
      </p>
    </BaseModal>
  )
}
