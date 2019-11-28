import mongoose from 'mongoose';
import { config } from './config';
import { server } from './server';

mongoose.connect(config.dbURI, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        // tslint:disable-next-line: no-console
        console.log(`Connected to DB: ${config.dbURI}`);
    });

server.listen(config.port, () => {
    // tslint:disable-next-line: no-console
    console.log(`Server ${process.pid} listening on port ${config.port}`);
});
