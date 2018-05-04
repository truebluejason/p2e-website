import React from 'react';
import InstructionsPages from './InstructionsPages';
import withAuthorization from '../higherorder/withAuthorization';
import withLevel from '../higherorder/withLevel';
import { ContainerDiv, SimpleDiv } from '../common/ContainerDiv';
import bootstrapClasses from '../../assets/bootstrap';

class InstructionsPage extends React.Component {
    render() {
        const pageContent = InstructionsPages[this.props.currentPageLevel - 1];
        return (
            <ContainerDiv>
                {!!pageContent ? pageContent() : <h3>There was an error.</h3>}
            </ContainerDiv>
        );
    }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(withLevel(InstructionsPage));
