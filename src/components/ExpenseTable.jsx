import React, { Component } from 'react';

class ExpenseTable extends Component {
  // Fiz essa parte consultando o link: https://blog.betrybe.com/html/table-html/
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default ExpenseTable;
