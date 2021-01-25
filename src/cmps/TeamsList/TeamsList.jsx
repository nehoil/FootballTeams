import './TeamsList.scss';
import { Input, Space } from 'antd';
import { Table, Button } from 'antd';
import react from 'react';
const columns = [
  {
    title: 'Name',
    dataIndex: 'shortName',
    sorter: {
      compare: (a, b) => a.shortName > b.shortName,
    },
  },
  {
    title: 'Founded',
    dataIndex: 'founded',
    sorter: {
      compare: (a, b) => a.founded - b.founded,
      multiple: 2,
    },
  },
  {
    title: 'Crest',
    dataIndex: 'crestUrl',
    render: (text, row, idx) => {
      return <img src={text} alt="" key={idx} />;
    },
  },
];
const { Search } = Input;

export default class TeamList extends react.Component {
  state = {
    selectedRowKeys: [],
    loading: false,
    teams: [],
  };

  componentDidMount() {
    const teams = this.props.data.teams.reduce((acc, team, idx) => {
      team.key = idx;
      acc.push(team);
      return acc;
    }, []);
    this.setState({ teams, selectedRowKeys: this.props.data.selected });
  }
  componentDidUpdate(){
    this.props.selectedChange(this.state.selectedRowKeys)
  }
  onSearch = (term) => {
    const filteredTeams = this.props.data.teams.filter(team=> team.shortName.includes(term) || team.founded === term)
    this.setState({teams: filteredTeams})
  };
  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys });
  };

  onRowClicked(idx) {
    if (!this.state.selectedRowKeys.includes(idx)) {
      this.setState((prevState) => {
        return {
          ...prevState,
          selectedRowKeys: [...prevState.selectedRowKeys, idx],
        };
      });
    } else {
      const filteredData = this.state.selectedRowKeys.filter(
        (team) => team !== idx
      );
      this.setState({ selectedRowKeys: filteredData });
    }
  }

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      columnTitle: 'Favorite',
    };
    return (
      <div className="teamslist-container container">
        <Search
          placeholder="Search team"
          onSearch={this.onSearch}
          enterButton
        />
        <Table
          onRow={(record, rowIndex) => {
            return {
              onClick: () => {
                this.onRowClicked(rowIndex);
              },
            };
          }}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={this.state.teams}
        />
      </div>
    );
  }
}
