import React from 'react';
import KegList from './KegList';
import KegDetail from './KegDetail';
import NewKegForm from './NewKegForm';
import EditKegForm from './EditKegForm';

class KegControl extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        formVisibleOnPage: false,
        masterKegList: [],
        selectedKeg: null,
        editing: false
      };
    }

    handleClick = () => {
      if(this.state.selectedKeg != null){
        this.setState({
          formVisibleOnPage: false,
          selectedKeg: null,
          editing: false
        });
      } else {
        this.setState(prevState => ({
          formVisibleOnPage: !prevState.formVisibleOnPage
        }));
      }
    }

    incrementKegSize = (kegToIncrement) => {
      const changedKeg = this.state.masterKegList
        .filter(keg => keg.id !== this.state.selectedKeg.id)
        .concat(kegToIncrement);
      const iteratedKeg = (kegToIncrement.kegSize.count(-1));
      this.setState({changedKeg: iteratedKeg})
    }

    handleAddingNewKegToList = (newKeg) => {
      const newMasterKegList = this.state.masterKegList.concat(newKeg);
      this.setState({masterKegList: newMasterKegList,
                    formVisibleOnPage: false});
    }

    handleChangingSelectedKeg = (id) => {
      const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
      this.setState({selectedKeg: selectedKeg});
    }

    handleEditClick = () => {
      this.setState({editing: true});
    }

    handleEditingKegInList = (kegToEdit) => {
      const editedMasterKegList = this.state.masterKegList
        .filter(keg => keg.id !== this.state.selectedKeg.id)
        .concat(kegToEdit);
      this.setState({
        masterKegList: editedMasterKegList,
        editing: false,
        selectedKeg: null
      });
    }

    render(){
      let currentlyVisibleState = null;
      let buttonText = null;

      if(this.state.editing){
        currentlyVisibleState = <EditKegForm 
                                keg = {this.state.selectedKeg} 
                                onEditKeg = {this.handleEditingKegInList} />
                                buttonText = "Return to Keg List";
      } else if (this.state.selectedKeg != null){
        currentlyVisibleState = <KegDetail 
                                keg = {this.state.selectedKeg} 
                                onClickingEdit = {this.handleEditClick} 
                                onClickingIncrement={this.incrementKegSize}/>
                                buttonText="Return to Keg List";
      } else if (this.state.formVisibleOnPage){
        currentlyVisibleState = <NewKegForm 
                                onNewKegCreation={this.handleAddingNewKegToList} />;
                                buttonText="Return to Keg List";
      } else {
        currentlyVisibleState = <KegList 
                                kegList={this.state.masterKegList} 
                                onKegSelection={this.handleChangingSelectedKeg} />
                                buttonText="Add Keg";
      }
      
      
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;