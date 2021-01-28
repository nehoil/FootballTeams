import './TeamsList.scss';
import { Input } from 'antd';
import { Table } from 'antd';
import react from 'react';
import { connect } from 'react-redux';
import {
  updateSelected,
  removeSelected,
  addSelected,
} from '../../store/actions/teamsAction';

const { Search } = Input;

class _TeamList extends react.Component {
  state = {
    term: '',
    isMobile: false,
    show: false,
  };
  columns = [
    {
      title: 'Name',
      dataIndex: 'shortName',
      sorter: {
        compare: (a, b) => a.shortName > b.shortName,
      },
      width: this.colWidth,
    },
    {
      title: 'Founded',
      dataIndex: 'founded',
      sorter: {
        compare: (a, b) => a.founded - b.founded,
        multiple: 2,
      },
      width: this.colWidth,
    },
    {
      title: 'Crest',
      dataIndex: 'crestUrl',
      render: (text, row, idx) => {
        return <img src={text} alt="" key={idx} />;
      },
      width: this.colWidth,
    },
  ];

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
      this.setState({ show: true });
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resize.bind(this));
  }

  get mainClass() {
    const regularClass = 'teamslist-container container';
    return this.state.show ? regularClass + ' show' : regularClass;
  }
  get colWidth() {
    return this.state.isMobile ? 0 : 150;
  }
  get teamsDate() {
    const { term } = this.state;
    if (term) {
      return this.props.data.teams.filter(
        (team) =>
          team.shortName.toLowerCase().includes(term.toLowerCase()) ||
          team.founded === term
      );
    }
    return this.props.data.teams;
  }

  resize() {
    this.setState({ isMobile: window.innerWidth <= 600 });
  }
  onSearch = (term) => {
    this.setState({ term });
  };
  onSelectChange = (selectedRowKeys) => {
    this.props.updateSelected(selectedRowKeys);
  };
  onRowClicked(idx) {
    if (!this.props.data.selected.includes(idx)) {
      this.props.addSelected(idx);
    } else {
      this.props.removeSelected(idx);
    }
  }

  render() {
    const rowSelection = {
      selectedRowKeys: this.props.data.selected,
      onChange: this.onSelectChange,
      columnTitle: 'Favorite',
    };
    return (
      <div className={this.mainClass}>
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
          columns={this.columns}
          dataSource={this.teamsDate}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state,
});

const mapDispatchToProps = {
  updateSelected,
  removeSelected,
  addSelected,
};

export default connect(mapStateToProps, mapDispatchToProps)(_TeamList);
