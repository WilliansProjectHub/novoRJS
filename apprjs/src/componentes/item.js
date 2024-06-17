import PropTypes from 'prop-types'

function Item({marca, datalancamento}) {
    return(
        <>
          <li >
            {marca} - {datalancamento}
          </li>
        </>
    )
}

Item.propTypes = {
  marca: PropTypes.string.isRequired,
  datalancamento: PropTypes.number.isRequired,
}

Item.propTypes = {
  marca: 'faltou marca',
  datalancamento: 0,
}

export default Item;