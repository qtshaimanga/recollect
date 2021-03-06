import {
  connect,
  produce,
} from '../providers/rabbitmq';


setTimeout(() => {
  connect().then((err) => {
    if (err) throw err;
  });
}, 60000);

export default function (qname, msg, cb) {
  produce(qname, msg).then((data) => {
    cb(null);
  }).catch((err) => {
    cb(err);
  });
}
