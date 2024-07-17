import { Button, Modal } from "flowbite-react";
import { ModalProps } from "./types";
import { useAppDispatch, useAppSelector } from "../../store";
import { showModal } from "../../store/userSlice";

export const ModalComponent = ({ title, nameButton, children }: ModalProps) => {
  const dispatch = useAppDispatch();
  const { isModalShow } = useAppSelector((state) => state.users);
  
  return (
    <>
      <Button onClick={() => dispatch(showModal(true))} className="mr-3 sm:w-1/4 bg-teal-500 text-3xl font-extrabold text-white">{nameButton}</Button>
      <Modal show={isModalShow} size="md" onClose={() => dispatch(showModal(false))} popup>
        <Modal.Header />
        <Modal.Body>
          <h3 className="text-xl font-medium text-gray-900">
            {title}
          </h3>
          {children}
        </Modal.Body>
      </Modal>
    </>
  );
};
