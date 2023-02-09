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
      <br>Mikel Diez (Arraiz)</br>
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="C"
          status="correct"
        />
        <Cell value="R" isCompleted={true} />
        <Cell value="E" isCompleted={true} />
        <Cell value="M" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
       La letra C es correcta y esta en su lugar.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="P" isCompleted={true} />
        <Cell value="I" isCompleted={true} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="S"
          status="present"
        />
        <Cell value="T" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
       La letra S es correcta pero no esta en su lugar.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="V" isCompleted={true} />
        <Cell value="I" isCompleted={true} />
        <Cell value="S" isCompleted={true} />
        <Cell isRevealing={true} isCompleted={true} value="T" status="absent" />
        <Cell value="A" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
       La letra T no es correcta.
      </p>
    </BaseModal>
  )
}
