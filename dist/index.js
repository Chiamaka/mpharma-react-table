'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var _templateObject = taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n'], ['\n  display: flex;\n  align-items: center;\n']),
    _templateObject2 = taggedTemplateLiteral(['\n  font-size: 12px;\n  margin: 0;\n  color: rgba(0, 0, 0, 0.89);\n  letter-spacing: 0.44px;\n'], ['\n  font-size: 12px;\n  margin: 0;\n  color: rgba(0, 0, 0, 0.89);\n  letter-spacing: 0.44px;\n']),
    _templateObject3 = taggedTemplateLiteral(['\n  ', '\n  font-size: ', ';\n  font-weight: ', ';\n'], ['\n  ', '\n  font-size: ', ';\n  font-weight: ', ';\n']),
    _templateObject4 = taggedTemplateLiteral(['\n  width: 100px;\n  height: 1px;\n  background-color: rgba(0, 0, 0, 0.12);\n'], ['\n  width: 100px;\n  height: 1px;\n  background-color: rgba(0, 0, 0, 0.12);\n']),
    _templateObject5 = taggedTemplateLiteral(['\n  ', ';\n  width: 80%;\n  border-collapse: collapse;\n  margin: 0 auto;\n'], ['\n  ', ';\n  width: 80%;\n  border-collapse: collapse;\n  margin: 0 auto;\n']),
    _templateObject6 = taggedTemplateLiteral(['\n  height: 40px;\n'], ['\n  height: 40px;\n']),
    _templateObject7 = taggedTemplateLiteral(['\n  ', '\n  letter-spacing: 0.38px;\n  text-align: ', ';\n'], ['\n  ', '\n  letter-spacing: 0.38px;\n  text-align: ', ';\n']),
    _templateObject8 = taggedTemplateLiteral(['\n  height: 40px;\n  border-bottom: ', ';\n'], ['\n  height: 40px;\n  border-bottom: ', ';\n']),
    _templateObject9 = taggedTemplateLiteral(['\n  ', '\n  letter-spacing: 0.54px;\n  text-align: ', ';\n  text-transform: ', ';\n'], ['\n  ', '\n  letter-spacing: 0.54px;\n  text-align: ', ';\n  text-transform: ', ';\n']),
    _templateObject10 = taggedTemplateLiteral(['\n  height: 20px;\n'], ['\n  height: 20px;\n']),
    _templateObject11 = taggedTemplateLiteral(['\n  height: 50px;\n  background: ', ';\n'], ['\n  height: 50px;\n  background: ', ';\n']),
    _templateObject12 = taggedTemplateLiteral(['\n  ', '\n  color: rgba(0,0,0,0.6);\n  font-weight: ', ';\n  letter-spacing: 0.54px;\n  text-align: ', ';\n\n  ', '\n\n  ', '\n\n  ', '\n\n'], ['\n  ', '\n  color: rgba(0,0,0,0.6);\n  font-weight: ', ';\n  letter-spacing: 0.54px;\n  text-align: ', ';\n\n  ', '\n\n  ', '\n\n  ', '\n\n']),
    _templateObject13 = taggedTemplateLiteral(['\n      border-top-left-radius: ', ';\n      padding-left: 10px;\n    '], ['\n      border-top-left-radius: ', ';\n      padding-left: 10px;\n    ']),
    _templateObject14 = taggedTemplateLiteral(['\n      border-top-right-radius: ', ';\n      padding-right: 10px;\n    '], ['\n      border-top-right-radius: ', ';\n      padding-right: 10px;\n    ']),
    _templateObject15 = taggedTemplateLiteral(['\n      border-bottom-left-radius: ', ';\n      padding-left: 10px;\n    '], ['\n      border-bottom-left-radius: ', ';\n      padding-left: 10px;\n    ']),
    _templateObject16 = taggedTemplateLiteral(['\n  ', '\n  font-size: 13px;\n  letter-spacing: 0.58px;\n  padding-top: 5px;\n  color: #000000;\n  font-weight: 500;\n'], ['\n  ', '\n  font-size: 13px;\n  letter-spacing: 0.58px;\n  padding-top: 5px;\n  color: #000000;\n  font-weight: 500;\n']),
    _templateObject17 = taggedTemplateLiteral(['\n  font-size: 16px;\n  color: #000000;\n  font-weight: 500;\n  letter-spacing: 0.71px;\n  text-align: ', ';\n  ', '\n'], ['\n  font-size: 16px;\n  color: #000000;\n  font-weight: 500;\n  letter-spacing: 0.71px;\n  text-align: ', ';\n  ', '\n']),
    _templateObject18 = taggedTemplateLiteral(['\n      border-bottom-right-radius: ', ';\n      padding-right: 10px;\n    '], ['\n      border-bottom-right-radius: ', ';\n      padding-right: 10px;\n    ']);

var FlexRow = styled__default.section(_templateObject);

var text = styled.css(_templateObject2);

var Text = styled__default.p(_templateObject3, text, function (props) {
  return props.size ? props.size + 'px' : '12px';
}, function (props) {
  return props.bold && 500;
});

var Divider = styled__default.div(_templateObject4);

var TableWrapper = styled__default.table(_templateObject5, function (props) {
  return props.style;
});

var TableHeadRow = styled__default.tr(_templateObject6);

var TableHeader = styled__default.th(_templateObject7, text, function (props) {
  return props.align;
});

var TableBodyRow = styled__default.tr(_templateObject8, function (props) {
  return !props.last ? '1px solid rgba(0, 0, 0, 0.12)' : 'none';
});

var TableBodyData = styled__default.td(_templateObject9, text, function (props) {
  return props.align;
}, function (props) {
  return props.uppercase && 'uppercase';
});

var TableData = styled__default.td(_templateObject9, text, function (props) {
  return props.align;
}, function (props) {
  return props.uppercase && 'uppercase';
});

var TableSpacer = styled__default.tr(_templateObject10);

var TableFooterRow = styled__default.tr(_templateObject11, function (props) {
  return props.backgroundColor || '#eee';
});

var TableFooterData = styled__default.td(_templateObject12, text, function (props) {
  return !props.normal ? 500 : 400;
}, function (props) {
  return props.align;
}, function (props) {
  return props.borderTopLeftRadius && styled.css(_templateObject13, function (props) {
    return props.borderTopLeftRadius + 'px';
  });
}, function (props) {
  return props.borderTopRightRadius && styled.css(_templateObject14, function (props) {
    return props.borderTopRightRadius + 'px';
  });
}, function (props) {
  return props.borderBottomLeftRadius && styled.css(_templateObject15, function (props) {
    return props.borderBottomLeftRadius + 'px';
  });
});

var NumbersData = styled__default.p(_templateObject16, text);

var AmountDue = styled__default.td(_templateObject17, function (props) {
  return props.align;
}, function (props) {
  return props.borderBottomRightRadius && styled.css(_templateObject18, function (props) {
    return props.borderBottomRightRadius + 'px';
  });
});

function TableHeader$1(_ref) {
  var headers = _ref.headers;

  return React__default.createElement(
    'thead',
    null,
    React__default.createElement(
      TableHeadRow,
      null,
      headers.map(function (_ref2, index) {
        var title = _ref2.title,
            _ref2$align = _ref2.align,
            align = _ref2$align === undefined ? 'left' : _ref2$align,
            width = _ref2.width;

        return React__default.createElement(
          TableHeader,
          { align: align, key: index, width: width },
          title
        );
      })
    )
  );
}

TableHeader$1.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.object).isRequired
};

var DataIndexContext = React.createContext();

function extractDataIndexes(headers) {
  var dataIndexes = [];
  headers.forEach(function (header) {
    if (header.dataIndex) {
      dataIndexes.push({ dataIndex: header.dataIndex, align: header.align });
    }
  });
  return dataIndexes;
}

function TableRow(_ref) {
  var item = _ref.item,
      renderIcon = _ref.renderIcon;

  var dataIndexes = React.useContext(DataIndexContext);
  return React__default.createElement(
    TableBodyRow,
    null,
    dataIndexes.map(function (_ref2, index) {
      var idx = _ref2.dataIndex,
          _ref2$align = _ref2.align,
          align = _ref2$align === undefined ? 'left' : _ref2$align;

      return React__default.createElement(
        TableBodyData,
        { key: index, align: align },
        item[idx]
      );
    }),
    renderIcon(item)
  );
}

TableRow.propTypes = {
  item: PropTypes.object.isRequired,
  renderIcon: PropTypes.func
};

function TableBody(_ref) {
  var data = _ref.data,
      renderIcon = _ref.renderIcon;

  return React__default.createElement(
    'tbody',
    null,
    data.map(function (item, index) {
      return React__default.createElement(TableRow, { item: item, key: index, renderIcon: renderIcon });
    })
  );
}

TableBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderIcon: PropTypes.func
};

function Table(_ref) {
  var headers = _ref.headers,
      data = _ref.data,
      renderIcon = _ref.renderIcon,
      tableStyle = _ref.tableStyle;

  return React__default.createElement(
    TableWrapper,
    { style: tableStyle },
    React__default.createElement(TableHeader$1, { headers: headers }),
    React__default.createElement(
      DataIndexContext.Provider,
      { value: extractDataIndexes(headers) },
      React__default.createElement(TableBody, { data: data, renderIcon: renderIcon })
    )
  );
}

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object),
  renderIcon: PropTypes.func,
  tableStyle: PropTypes.object
};

Table.defaultProps = {
  headers: [],
  data: [],
  renderIcon: function renderIcon() {},
  tableStyle: {}
};

module.exports = Table;
//# sourceMappingURL=index.js.map
