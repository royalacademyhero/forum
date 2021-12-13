'use strict';

const api = require('../../api');
const messaging = require('../../messaging');

const helpers = require('../helpers');

const Chats = module.exports;

Chats.list = async (req, res) => {
	const page = (isFinite(req.query.page) && parseInt(req.query.page, 10)) || 1;
	const perPage = (isFinite(req.query.perPage) && parseInt(req.query.perPage, 10)) || 20;
	const start = Math.max(0, page - 1) * perPage;
	const stop = start + perPage;
	const { rooms } = await messaging.getRecentChats(req.uid, req.uid, start, stop);

	helpers.formatApiResponse(200, res, { rooms });
};

Chats.create = async (req, res) => {
	// ...
};

Chats.exists = async (req, res) => {
	helpers.formatApiResponse(200, res);
};

Chats.get = async (req, res) => {
	// ...
};

Chats.post = async (req, res) => {
	// ...
};

Chats.users = async (req, res) => {
	// ...
};

Chats.invite = async (req, res) => {
	// ...
};

Chats.kick = async (req, res) => {
	// ...
};

Chats.messages = {};
Chats.messages.edit = async (req, res) => {
	// ...
};

Chats.messages.delete = async (req, res) => {
	// ...
};