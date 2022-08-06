import React, {useState, useMemo} from "react";
import useWindowSize from './hooks/useWindowSize';
import Shop from "./Shop/Shop";
import ProductCard from './ProductCard';
import Modal from './Modal';
import BModal from 'react-bootstrap/Modal';

export default function() {
  let { width } = useWindowSize();
  let [ showFaq, setShowFaq ] = useState(false);

  return <div>
    Hello React!
    <hr/>
    <Shop/>
    <hr/>
    <ProductCard/>
    <hr/>
    <footer>
      <div>
        { width }
      </div>
      <hr/>
      <strong onClick={() => setShowFaq(true)}>Modal</strong>
      <hr/>
      <Modal show={showFaq} header="Header" onHide={() => setShowFaq(false)}>
        Custom Modal
      </Modal>
      <hr/>
      {/*<BModal show={showFaq} onHide={() => setShowFaq(false)}>
        <BModal.Header>
          Header
        </BModal.Header>
        <BModal.Body>
          <p>Body</p>
        </BModal.Body>
      </BModal>*/}
    </footer>
  </div>
}
